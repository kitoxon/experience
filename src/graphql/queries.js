/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
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
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserDetail = /* GraphQL */ `
  query GetUserDetail($id: ID!) {
    getUserDetail(id: $id) {
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
      followers {
        items {
          user_id
          followed_user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          user_id
          followed_user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      categorys {
        items {
          id
          user_id
          category_id
          createdAt
          updatedAt
        }
        nextToken
      }
      group {
        items {
          id
          user_id
          group_id
          role
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $filter: ModelUserDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getFollowedUsers = /* GraphQL */ `
  query GetFollowedUsers($user_id: ID!, $followed_user_id: ID!) {
    getFollowedUsers(user_id: $user_id, followed_user_id: $followed_user_id) {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const listFollowedUsers = /* GraphQL */ `
  query ListFollowedUsers(
    $user_id: ID
    $followed_user_id: ModelIDKeyConditionInput
    $filter: ModelFollowedUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFollowedUsers(
      user_id: $user_id
      followed_user_id: $followed_user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user_id
        followed_user_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCategory = /* GraphQL */ `
  query GetUserCategory($user_id: ID!, $category_id: ID!) {
    getUserCategory(user_id: $user_id, category_id: $category_id) {
      id
      user_id
      category_id
      createdAt
      updatedAt
      category {
        id
        name
        icon
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUserCategories = /* GraphQL */ `
  query ListUserCategories(
    $user_id: ID
    $category_id: ModelIDKeyConditionInput
    $filter: ModelUserCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserCategories(
      user_id: $user_id
      category_id: $category_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        category_id
        createdAt
        updatedAt
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        icon
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      subject
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
      order
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      category {
        id
        name
        icon
        createdAt
        updatedAt
      }
      subs {
        items {
          id
          title
          subject
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
          order
        }
        nextToken
      }
      comments {
        items {
          id
          user_id
          post_id
          comment
          status
          type
          parent_id
          replyUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      reactions {
        items {
          post_id
          user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      group {
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
        founder {
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
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        members {
          nextToken
        }
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostByType = /* GraphQL */ `
  query GetPostByType(
    $type: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByType(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostByGroup = /* GraphQL */ `
  query GetPostByGroup(
    $group_id: ID
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByGroup(
      group_id: $group_id
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostByUser = /* GraphQL */ `
  query GetPostByUser(
    $user_id: ID
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostByUser(
      user_id: $user_id
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
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
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      user_id
      post_id
      comment
      status
      type
      parent_id
      replyUserID
      createdAt
      updatedAt
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      replyTo {
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      post {
        id
        title
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      sub {
        items {
          id
          user_id
          post_id
          comment
          status
          type
          parent_id
          replyUserID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        post_id
        comment
        status
        type
        parent_id
        replyUserID
        createdAt
        updatedAt
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
          status
          createdAt
          updatedAt
        }
        replyTo {
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
        }
        post {
          id
          title
          subject
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
          order
        }
        sub {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPostReaction = /* GraphQL */ `
  query GetPostReaction($post_id: ID!, $user_id: ID!) {
    getPostReaction(post_id: $post_id, user_id: $user_id) {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const listPostReactions = /* GraphQL */ `
  query ListPostReactions(
    $post_id: ID
    $user_id: ModelIDKeyConditionInput
    $filter: ModelPostReactionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPostReactions(
      post_id: $post_id
      user_id: $user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        post_id
        user_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReportedPost = /* GraphQL */ `
  query GetReportedPost($id: ID!) {
    getReportedPost(id: $id) {
      id
      reason
      status
      createdAt
      updatedAt
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      post {
        id
        title
        subject
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
        order
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
          status
          createdAt
          updatedAt
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        subs {
          nextToken
        }
        comments {
          nextToken
        }
        reactions {
          nextToken
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      type {
        id
        name
        status
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const listReportedPosts = /* GraphQL */ `
  query ListReportedPosts(
    $filter: ModelReportedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReportedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reason
        status
        createdAt
        updatedAt
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
          status
          createdAt
          updatedAt
        }
        post {
          id
          title
          subject
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
          order
        }
        type {
          id
          name
          status
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getReportType = /* GraphQL */ `
  query GetReportType($id: ID!) {
    getReportType(id: $id) {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const listReportTypes = /* GraphQL */ `
  query ListReportTypes(
    $filter: ModelReportTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReportTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupUsers = /* GraphQL */ `
  query GetGroupUsers($user_id: ID!, $group_id: ID!) {
    getGroupUsers(user_id: $user_id, group_id: $group_id) {
      id
      user_id
      group_id
      role
      createdAt
      updatedAt
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      group {
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
        founder {
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
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        members {
          nextToken
        }
      }
    }
  }
`;
export const listGroupUsers = /* GraphQL */ `
  query ListGroupUsers(
    $user_id: ID
    $group_id: ModelIDKeyConditionInput
    $filter: ModelGroupUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGroupUsers(
      user_id: $user_id
      group_id: $group_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user_id
        group_id
        role
        createdAt
        updatedAt
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
          status
          createdAt
          updatedAt
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
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
        id
        user_id
        group_id
        role
        createdAt
        updatedAt
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
          status
          createdAt
          updatedAt
        }
        group {
          id
          name
          category_id
          about
          founder_id
          rating
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
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
      founder {
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
        followers {
          nextToken
        }
        following {
          nextToken
        }
        categorys {
          nextToken
        }
        group {
          nextToken
        }
      }
      category {
        id
        name
        icon
        createdAt
        updatedAt
      }
      members {
        items {
          id
          user_id
          group_id
          role
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        founder {
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
        }
        category {
          id
          name
          icon
          createdAt
          updatedAt
        }
        members {
          nextToken
        }
      }
      nextToken
    }
  }
`;
