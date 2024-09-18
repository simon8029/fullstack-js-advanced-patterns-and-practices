import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Container, Button, Typography, Paper, Divider, Stack, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import * as monaco from 'monaco-editor';

// Child component with React.memo to prevent unnecessary re-renders
const Child: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
  const [childCount, setChildCount] = useState<number>(0);
  const childRenderCount = useRef(0);

  // Increment render count
  childRenderCount.current += 1;

  // Increment childCount when the button is clicked
  const handleChildClick = useCallback(() => {
    setChildCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        Child Component
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleChildClick}>
        Increment Child Count
      </Button>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Child Count: {childCount}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Child rendered: {childRenderCount.current} times
      </Typography>
      <Button variant="contained" color="secondary" onClick={onClick} sx={{ marginTop: 1 }}>
        Parent's Increment Count
      </Button>
    </Paper>
  );
});

// CodeDisplay component using Monaco Editor
const CodeDisplay: React.FC<{ codeString: string; language: string }> = ({ codeString, language }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(true); // State to manage fold/unfold

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: codeString,
        language: language,
        theme: 'vs-dark',
        automaticLayout: true,
      });

      return () => editor.dispose(); // Clean up editor on component unmount
    }
  }, [codeString, language]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ marginBottom: 3 }}>
      <Button onClick={handleToggle} variant="contained" sx={{ marginBottom: 2 }}>
        {isCollapsed ? 'Show Code' : 'Hide Code'}
      </Button>

      {/* Conditionally render the Monaco editor */}
      {!isCollapsed && (
        <Paper elevation={3} sx={{ padding: 2, height: '300px' }}>
          <div ref={editorRef} style={{ height: '100%' }} />
        </Paper>
      )}
    </Box>
  );
};

// Main component
const MemoAndUseCallback: React.FC = () => {
  const [parentCount, setParentCount] = useState<number>(0); // Parent's own count state
  const [name, setName] = useState<string>('John'); // Parent's own name state
  const parentRenderCount = useRef(0); // Track how many times Parent renders

  // Increment render count
  parentRenderCount.current += 1;

  // useCallback memoizes the handleClick function and only updates it when `parentCount` changes.
  const handleParentClick = useCallback(() => {
    setParentCount((prevCount) => prevCount + 1); // Increment the parentCount
  }, [parentCount]);

  const codeString = `
    const handleParentClick = useCallback(() => {
      setParentCount((prevCount) => prevCount + 1);
    }, [parentCount]);

    return (
      <Container>
        <Button variant="outlined" onClick={handleParentClick}>
          Increment Parent Count
        </Button>
        <Child onClick={handleParentClick} />
      </Container>
    );
  `;

  return (
    <Container sx={{ marginTop: 4 }}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/react"
        sx={{ marginBottom: 2 }}
      >
        Back to React Home
      </Button>

      <Typography variant="h4" gutterBottom>
        Memo and UseCallback with Monaco Editor
      </Typography>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          Parent Component
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={handleParentClick}>
            Increment Parent Count
          </Button>
          <Button
            variant="outlined"
            onClick={() => setName(name === 'John' ? 'Doe' : 'John')}
          >
            Change Name
          </Button>
        </Stack>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Parent Count: {parentCount}
        </Typography>
        <Typography variant="body2">
          Name: {name}
        </Typography>
        <Typography variant="body2">
          Parent rendered: {parentRenderCount.current} times
        </Typography>
      </Paper>

      <Divider sx={{ marginY: 4 }} />

      {/* Render the CodeDisplay component */}
      <CodeDisplay codeString={codeString} language="javascript" />
      <Child onClick={handleParentClick} />
    </Container>
  );
};

export default MemoAndUseCallback;
