import PageLayout from '@components/layouts/PageLayout';
import { Alert, Box, Typography } from '@mui/material';
import Search from '@components/homePage/Search';
import { useState } from 'react';
import DataTable from '@components/homePage/DataTable';

export default function HomePage() {
  const [searchData, setSearchData] = useState([]);
  const [showNoData, setShowNoData] = useState(false);
  const setData = (data: any) => {
    setShowNoData(data.length == 0)
    setSearchData(data);
  };

  return (
    <PageLayout
      pageTitle="Home"
      maxWidth={'md'}
    >
      <Box>
        <Search setData={setData} />
        {searchData.length > 0 ? (
          <DataTable rows={searchData} />
        ) :
          (
            showNoData && (
              <Box mb=".5rem">
                <Alert severity="success" color="info" sx={{ textAlign: 'center'}}>
                  No result available!
                  </Alert>
              </Box>
            )
          )}
      </Box>
    </PageLayout>
  );
}
