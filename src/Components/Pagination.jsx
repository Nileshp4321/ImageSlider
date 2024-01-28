import React, { useState } from 'react';
import { Button, Pagination, Stack, Typography } from '@mui/material';

const itemsPerPage = 5;

const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Pagination Example
      </Typography>
      <Stack spacing={2}>
        {currentData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Stack>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default PaginationExample;
