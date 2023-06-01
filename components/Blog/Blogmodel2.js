
export async function getStaticProps() {
    const response = await axios.get(`${domain}/Addproject`)
    return {
      props: {
        projetData: response.data
      }
    }
  }