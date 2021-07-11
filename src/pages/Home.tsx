import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import { experimentalStyled as styled } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export const TOP_PRODUCT_QUERY = gql`
  query topProducts($first: Int!) {
    topProducts(first: $first) {
      name
      inStock
    }
  }
`

const HomePage = () => {
  const { data, loading, error, networkStatus } = useQuery(TOP_PRODUCT_QUERY, {
    variables: {
      first: 12,
    },
  })

  if (loading) {
    return (
      <Container maxWidth="md">
        Loading...
      </Container>
    )
  }

  return (
    <Container maxWidth="md">
      <Box sx={{padding: 5}}>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.topProducts.map(({ name }, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>{name}</Item>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Container>
  )
}

export default HomePage
