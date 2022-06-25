import PrimaryButton from '@components/buttons/PrimaryButton';
import TextInputField from '@components/inputs/TextInputField';
import { useAxios } from '@contexts/AxiosContext';
import { Box, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { throttle } from 'lodash';
import { ISearch } from '@utils/models';

interface IFormInput {
  searchterm: string;
}

interface IProps {
  setData: (data: any) => void;
}

export default function Search({setData} : IProps) {
  const { getSearch } = useAxios();
  const {
    control,
    handleSubmit,
    formState,
    setError
  } = useForm<IFormInput>({
    defaultValues: {
      searchterm: ''
    },
    mode: 'onChange'
  });

  const fetch = useMemo(
    () =>
      throttle(
        async (
          request: { input: string },
          callback: (results: ISearch | null) => void
        ) => {
          const data = await getSearch(request.input);
          console.log(data);
          callback(data);
        },
        200
      ),
    [getSearch]
  );
  
  const onSubmit = async (search: IFormInput) => {
    try {
      setData([]);
      fetch({ input : search.searchterm.trim() }, (results : ISearch | null) => {
        const data : any = [];
        if (results) {
          results.results.map( (value, index) =>{
            data.push({
              id: index,
              artistId: value.artistId,
              artistName: value.artistName,
              collectionName: value.collectionName,
              kind: value.kind,
              trackName: value.trackName
            })
          });
        }
        setData(data);
      });
    } catch (err: any) {
      setError('searchterm', {
        message: err.response.data.err
      });
    }
  }

  return (
    <Box sx={{ mb: 2}}>
      <Typography typography="h6" mb=".5rem">
        Welcome to Next Music Search
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextInputField
              name={'searchterm'}
              label={'Search term'}
              control={control}
              rules={{
                maxLength: {
                  value: 50,
                  message: 'Search term is too long'
                }
              }}
            />
          </Grid>

          <Grid item xs={12} mt=".5rem">
            <PrimaryButton btnText="Search" formState={formState} />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
