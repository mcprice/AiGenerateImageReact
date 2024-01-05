import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';

export default function MasonryImageList({ images }) {
  return (
    <Box>
      <Paper elevation={3}>
      <ImageList variant="masonry" cols={1}>
        {images.map((image) => (
          <ImageListItem key={image.url}>
            <img
              srcSet={`${image.url}`}
              src={`${image.url}`}
              alt={image.revised_prompt}
              title={image.revised_prompt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Paper>
    </Box>
  );
}