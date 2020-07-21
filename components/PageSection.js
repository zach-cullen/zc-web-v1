import { Box } from '@chakra-ui/core'

export default ({ children, sectionBg }) => {
  return (
    <Box
      bg={sectionBg}
    >
      <Box
        maxW='720px'
        mx='auto'
        p={4}
      >
        {children}
      </Box>
    </Box>
  )
}
