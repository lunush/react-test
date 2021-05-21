import styled from 'styled-components'
import { margin } from '@styled-system/space'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  justify-content: space-between;
`

export const Column = styled.div`
  flex: 1;
  min-height: 100vh;
  padding: 16px;
`

export const Post = styled.div.attrs({
  mx: 0,
  my: 3,
})`
  max-width: 300px;
  border: 1px solid lightgray;
  border-radius: 8px;
  background: lightgray;
  padding: 16px;

  ${margin}
`

export const PostAuthor = styled.small`
  display: block;
  color: gray;
`

export const PostBody = styled.div`
  height: 19px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`
