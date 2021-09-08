export const updateUserDetail = /* GraphQL */ `
  mutation UpdateUserDetail(
    $input: UpdateUserDetailInput!
    $condition: ModelUserDetailConditionInput
  ) {
    updateUserDetail(input: $input, condition: $condition) {
      id
      user_id
      firstname
      lastname
      birthdate
      gender
      pic_id
      cover_pic_id
      about
      aura
      is_public
      status
      createdAt
      updatedAt
      pic {
        id
        key
        name
        owner
        bucket
        region
        level
        ext
        url
        createdAt
        updatedAt
      }
      cover_pic {
        id
        key
        name
        owner
        bucket
        region
        level
        ext
        url
        createdAt
        updatedAt
      }
      categorys {
        items {
          id
          user_id
          category_id
        }
        nextToken
      }
      group {
        items {
          id
          group_id
          role
        }
        nextToken
      }
    }
  }
`;