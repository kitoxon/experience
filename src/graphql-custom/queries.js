export const listPostsForHome = /* GraphQL */ `
  query GetPostByType(
    $type: String
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subject
        file {
          id
          bucket
          region
          level
          ext
        }
        user {
          id
          firstname
          lastname
          pic {
            bucket
            region
            level
            id
            ext
          }
          aura
          followers{
            items{
              followed_user_id
            }
          }
        }
        reactions {
          items {
            user_id
          }
        }
      }
      nextToken
    }
  }
`;
export const listPostsForGroup = /* GraphQL */ `
query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      file_id
      status
      updatedAt
      createdAt
      commentType
      type
      parent_id
      user_id
      group_id
      file {
        id
        key
        name
        bucket
        region
        level
        ext
        url
        createdAt
        updatedAt
      }
      user {
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
        createdAt
        updatedAt
      }
      subs {
        items {
          commentType
          createdAt
          file_id
          group_id
          id
          parent_id
          status
          title
          type
          updatedAt
          user_id
          file {
            bucket
            createdAt
            ext
            id
            key
            level
            name
            region
            updatedAt
            url
          }
        }
      }
      group {
        items {
          about
          category_id
          createdAt
          founder_id
          id
          name
          rating
          updatedAt
        }
      }
    }
    nextToken
  }
}
`;

export const getUserDetailByUserID = /* GraphQL */ `
  query GetUserDetailByUserID(
    $user_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserDetailByUserID(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        pic {
          id
          key
          name
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
            category_id
            id
            user_id
          }
        }
        group {
          nextToken
          items {
            group_id
            id
            role
          }
        }
      }
      nextToken
    }
  }
`;
export const getPostByGroupTypeStatus = /* GraphQL */ `
  query GetPostByGroupTypeStatus(
    $group_id: ID
    $typeStatus: ModelPostByGroupTypeStatusCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByGroupTypeStatus(
      group_id: $group_id
      typeStatus: $typeStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        file_id
        status
        commentType
        type
        parent_id
        user_id
        group_id
        category_id
        createdAt
        updatedAt
        file {
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
        user {
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
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          group_id
          createdAt
          updatedAt
        }
        subs {
          items {
            title
            file_id
            file {  
              bucket
              region
              level
              id
              ext
              url
            }
          }
        }
        comments {
          nextToken
        }
        group {
          items {
            name
            about
            rating
            founder_id
            cover {
              bucket
              region
              level
              id
              ext
              url
            }
            founder {
              firstname
              pic_id
              pic{
                bucket
                region
                level
                id
                ext
                url
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const getPostByGroup = /* GraphQL */ `
  query GetPostByGroup(
    $group_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByGroup(
      group_id: $group_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        file_id
        status
        commentType
        type
        parent_id
        user_id
        group_id
        category_id
        createdAt
        updatedAt
        file {
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
        user {
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
          createdAt
          updatedAt
          pic{
            bucket
            region
            level
            id
            ext
            url
          }
          followers{
            items{
              followed_user_id
            }
          }
        }
        category {
          id
          name
          icon
          group_id
          createdAt
          updatedAt
        }
        subs {
          items {
            title
            file_id
            file {  
              bucket
              region
              level
              id
              ext
              url
            }
          }
        }
        comments {
          nextToken
        }
        group {
          name
          about
          rating
          founder_id
          cover{
            bucket
            region
            level
            id
            ext
            url
          }
          founder {
            firstname
            pic_id
            pic{
              bucket
              region
              level
              id
              ext
              url
            }
          }
        }
        reactions{
          items{
            post_id
          }
        }
      }
      nextToken
    }
  }
`;
export const getPostDetailsForPostModal = /* GraphQL */ `
  query GetPostDetailsForPostModal(
    $id: ID!
  ) {
    getPost(id: $id) {
      commentType
      createdAt
      id
      file {
        bucket
        ext
        id
        level
        region
      }
      group {
        name
        id
        cover {
          bucket
          ext
          id
          level
          region
        }
      }
      category {
        icon
        id
      }
      title
      subject
      subs(filter: {status: {ne: "DELETED"}}) {
        items {
          file {
            bucket
            ext
            id
            level
            region
          }
          title
          id
        }
      }
      user {
        id
        pic {
          bucket
          ext
          id
          level
          region
        }
        firstname
        lastname
      }
    }
  }
`;
export const getPostByUser = /* GraphQL */ `
  query GetPostByUser(
    $user_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByUser(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        file_id
        status
        commentType
        type
        parent_id
        user_id
        group_id
        category_id
        createdAt
        updatedAt
        file {
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
        user {
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
          following{
            items{
              user_id
            }
          }
          followers{
            items{
              followed_user_id
            }
          }
          pic{
            bucket
            region
            level
            id
            ext
            url
          }
        }
        category {
          id
          name
          icon
          group_id
          createdAt
          updatedAt
        }
        subs {
          items {
            file {
              bucket
              ext
              id
              level
              region
            }
            title
          }
        }
        comments {
          nextToken
        }
        group {
          name
        }
        reactions {
          items {
            post_id
          }
        }
      }
      nextToken
    }
  }
`;

export const getUserDetail = /* GraphQL */ `
  query GetUserDetail($id: ID!) {
    getUserDetail(id: $id) {
      id
      followers{
        items{
          user_id
          followed_user_id
        }
      }
      following{
        items{
          user_id
        }
      }
      group {
        items {
          role
          id
          group_id
          user_id
          group {
            name
            id
            members {
              items {
                id
              }
            }
          }
        }
      }
    }
  }
`;
export const getGroupUsers = /* GraphQL */ `
  query GetGroupUsers($user_id: ID!, $group_id: ID!) {
    getGroupUsers(user_id: $user_id, group_id: $group_id) {
      role
      group {
        name
        about
        members{
          items {
            id
          }
        }
      }
    }
  }
`;

export const getReactionsFromPost = /* GraphQL */ `
  query getCommentsFromPost(
    $id: ID!
  ) {
    getPost(id: $id) {
      comments(filter: {type: {eq: "PARENT"}, status: {ne: "DELETED"}}) {
        items {
          sub {
            items {
              createdAt
              comment
              id
              replyTo {
                firstname
                id
                lastname
              }
              user {
                firstname
                id
                lastname
                pic {
                  bucket
                  ext
                  id
                  level
                  region
                }
              }
            }
          }
          comment
          id
          createdAt
          type
          user {
            firstname
            lastname
            pic {
              bucket
              ext
              id
              level
              region
            }
          }
        }
      }
      reactions {
        items {
          user_id
        }
      }
    }
  }
`;

export const listGroupUsersForCreatePost = /* GraphQL */ `
  query listGroupUsersForCreatePost(
    $id: ID!
  ) {
    listGroupUsers(user_id: $id) {
      items {
        group {
          category {
            icon
          }
          id
          name
          category_id
        }
      }
    }
  }
`;

export const listGroupsForCreatePost = /* GraphQL */ `
  query listGroupsForCreatePost {
    listGroups {
      items {
        category {
          icon
        }
        id
        name
        category_id
      }
    }
  }
`;

export const getPostCount = /* GraphQL */`
  query GetPostCount(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ){
      total
    }
  }
`;

export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        file_id
        status
        commentType
        type
        subject
        parent_id
        user_id
        group_id
        category_id
        createdAt
        updatedAt
        file {
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
        user {
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
          createdAt
          updatedAt
          followers{
            items{
              user_id
              followed_user_id
            }
          }
          following{
            items{
              user_id
              followed_user_id
            }
          }
          pic{
            bucket
            region
            level
            id
            ext
            url
          }
        }
        category {
          id
          name
          icon
          group_id
          createdAt
          updatedAt
        }
        subs {
          items {
            title
            file_id
            file {  
              bucket
              region
              level
              id
              ext
              url
            }
          }
        }
        comments {
          nextToken
        }
        group {
          name
          about
          rating
          founder_id
          cover{
            bucket
            region
            level
            id
            ext
            url
          }
          founder {
            firstname
            pic_id
            pic{
              bucket
              region
              level
              id
              ext
              url
            }
          }
        }
        reactions{
          items{
            post_id
            user_id
          }
        }
      }
      nextToken
      total
    }
  }
`;