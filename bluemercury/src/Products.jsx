import { Grid, grid } from "@chakra-ui/react"
import Product from "./Components/Product"
export const Products = () => {
  return (
   <Grid

   p="5"
   paddingTop="15vh"
   w="100%"
   templateColumns={["repeat(1,1fr)", "repeat(5,1fr)"]}
   gap={6}
   >

    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>

   </Grid>
  )
}
export default Products;
