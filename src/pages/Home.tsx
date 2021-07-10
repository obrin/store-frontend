import React from 'react'
import { Carousel, CardColumns } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Layout from '../components/Layout'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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
      first: 12
    }
  })

  if (loading) {
    return (
      <Layout>
        <Spinner animation="border" />
      </Layout>
    )
  }

  return (
    <Layout>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x500/282c34/?text=First Image"
          />
          <Carousel.Caption>
            <h3>First side label</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              dolorem.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x500/282c34/?text=Second Image"
          />
          <Carousel.Caption>
            <h3>Second side label</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              dolorem.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>Featured</div>
      <CardColumns>
        {data.topProducts.map(({ name }, i) => (
          <Card key={i}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/311x160/282c34"
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Layout>
  )
}

export default HomePage
