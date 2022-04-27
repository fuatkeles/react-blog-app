import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext';

export default function FormPropsTextFields() {
  const { currentUser } = useContext(AuthContext);
  const {info, setInfo, AddData} = useContext(AuthContext);
  return (
    <>
   <h2>New Post</h2>
    <Box
    sx={{margin: '1rem'}}
    >
      <img src="https://picsum.photos/800/800" alt="sample-movie" width={250}  />
    </Box>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          name="title"
         
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />
       
      </div>
      <div>
      <TextField
          required
          name='img'
          id="outlined-required"
          label="Image"
          defaultValue=""
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Description"
          name='desc'
          defaultValue=""
          multiline={true}
          rows={10}
        />
      </div>
      <Button variant="contained" color="success">Publish</Button>
    </Box>
    
    </>
  );
}
