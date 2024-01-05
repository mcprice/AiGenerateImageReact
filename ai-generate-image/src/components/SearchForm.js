import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import StandardImageList from "./StandardImageList";
import { Stack } from "@mui/material";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import BrushIcon from '@mui/icons-material/Brush';

export default function SearchForm() {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5000/images/create", {
        term: term,
      })
      .then(function (response) {
        setImages(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Box sx={{ m: 1, marginTop: 2 }}>
        <Typography variant="h5" gutterBottom>
          Generate Image
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Use DALLE-3 to generate an image based on your prompt.
        </Typography>
      </Box>

      <Box sx={{ m: 1, width: "auto" }}>
        <form id="generate-openai-image" onSubmit={handleSubmit}>
          <Stack spacing={2} direction="column">
            <TextField
              id="term"
              label="Type Your Prompt Here"
              variant="filled"
              multiline
              onChange={handleChange}
            />
            <LoadingButton
              onClick={handleSubmit}
              endIcon={<BrushIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              size="large"
              type="submit"
            >
              <span>Generate</span>
            </LoadingButton>
          </Stack>
        </form>
      </Box>

      <Box>
        <StandardImageList images={images} />
      </Box>
    </React.Fragment>
  );
}
