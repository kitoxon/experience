export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      category_id
      about
      founder_id
      rating
      createdAt
      updatedAt
      cover {
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
      category {
        id
        name
        icon
      }
    }
  }
`;

export const getGroupRoleByUser = /* GraphQL */ `
  query GetGroupUsers($user_id: ID!, $group_id: ID!) {
    getGroupUsers(user_id: $user_id, group_id: $group_id) {
      role
    }
  }
`;

export const getGroupMembersCount = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      members {
        items {
          group_id
          id
          user {
            pic {
              url
              region
              name
              level
              id
              ext
              bucket
            }
            firstname
          }
        }
      }
    }
  }
`;

export const getGroupUsersByGroup = /* GraphQL */ `
  query GetGroupUsersByGroup(
    $group_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGroupUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getGroupUsersByGroup(
      group_id: $group_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        user {
          firstname
          pic {
            bucket
            ext
            id
            key
            level
            name
            owner
            region
            url
          }
        }
        role
      }
      nextToken
    }
  }
`;