import { Box } from '@chakra-ui/core'

export default ({ children, sectionBg }) => {
  return (
    <Box
      bg={sectionBg}
    >
      <Box
        maxW='800px'
        mx='auto'
        p={4}
      >
        {children}
      </Box>
    </Box>
  )
}
