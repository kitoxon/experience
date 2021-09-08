/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createUserDetail = /* GraphQL */ `
  mutation CreateUserDetail(
    $input: CreateUserDetailInput!
    $condition: ModelUserDetailConditionInput
  ) {
    createUserDetail(input: $input, condition: $condition) {
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
export const deleteUserDetail = /* GraphQL */ `
  mutation DeleteUserDetail(
    $input: DeleteUserDetailInput!
    $condition: ModelUserDetailConditionInput
  ) {
    deleteUserDetail(input: $input, condition: $condition) {
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
export const createFollowedUsers = /* GraphQL */ `
  mutation CreateFollowedUsers(
    $input: CreateFollowedUsersInput!
    $condition: ModelFollowedUsersConditionInput
  ) {
    createFollowedUsers(input: $input, condition: $condition) {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowedUsers = /* GraphQL */ `
  mutation UpdateFollowedUsers(
    $input: UpdateFollowedUsersInput!
    $condition: ModelFollowedUsersConditionInput
  ) {
    updateFollowedUsers(input: $input, condition: $condition) {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowedUsers = /* GraphQL */ `
  mutation DeleteFollowedUsers(
    $input: DeleteFollowedUsersInput!
    $condition: ModelFollowedUsersConditionInput
  ) {
    deleteFollowedUsers(input: $input, condition: $condition) {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const createUserCategory = /* GraphQL */ `
  mutation CreateUserCategory(
    $input: CreateUserCategoryInput!
    $condition: ModelUserCategoryConditionInput
  ) {
    createUserCategory(input: $input, condition: $condition) {
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
export const updateUserCategory = /* GraphQL */ `
  mutation UpdateUserCategory(
    $input: UpdateUserCategoryInput!
    $condition: ModelUserCategoryConditionInput
  ) {
    updateUserCategory(input: $input, condition: $condition) {
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
export const deleteUserCategory = /* GraphQL */ `
  mutation DeleteUserCategory(
    $input: DeleteUserCategoryInput!
    $condition: ModelUserCategoryConditionInput
  ) {
    deleteUserCategory(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createPostReaction = /* GraphQL */ `
  mutation CreatePostReaction(
    $input: CreatePostReactionInput!
    $condition: ModelPostReactionConditionInput
  ) {
    createPostReaction(input: $input, condition: $condition) {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const updatePostReaction = /* GraphQL */ `
  mutation UpdatePostReaction(
    $input: UpdatePostReactionInput!
    $condition: ModelPostReactionConditionInput
  ) {
    updatePostReaction(input: $input, condition: $condition) {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const deletePostReaction = /* GraphQL */ `
  mutation DeletePostReaction(
    $input: DeletePostReactionInput!
    $condition: ModelPostReactionConditionInput
  ) {
    deletePostReaction(input: $input, condition: $condition) {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const createReportedPost = /* GraphQL */ `
  mutation CreateReportedPost(
    $input: CreateReportedPostInput!
    $condition: ModelReportedPostConditionInput
  ) {
    createReportedPost(input: $input, condition: $condition) {
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
export const updateReportedPost = /* GraphQL */ `
  mutation UpdateReportedPost(
    $input: UpdateReportedPostInput!
    $condition: ModelReportedPostConditionInput
  ) {
    updateReportedPost(input: $input, condition: $condition) {
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
export const deleteReportedPost = /* GraphQL */ `
  mutation DeleteReportedPost(
    $input: DeleteReportedPostInput!
    $condition: ModelReportedPostConditionInput
  ) {
    deleteReportedPost(input: $input, condition: $condition) {
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
export const createReportType = /* GraphQL */ `
  mutation CreateReportType(
    $input: CreateReportTypeInput!
    $condition: ModelReportTypeConditionInput
  ) {
    createReportType(input: $input, condition: $condition) {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateReportType = /* GraphQL */ `
  mutation UpdateReportType(
    $input: UpdateReportTypeInput!
    $condition: ModelReportTypeConditionInput
  ) {
    updateReportType(input: $input, condition: $condition) {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteReportType = /* GraphQL */ `
  mutation DeleteReportType(
    $input: DeleteReportTypeInput!
    $condition: ModelReportTypeConditionInput
  ) {
    deleteReportType(input: $input, condition: $condition) {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const createGroupUsers = /* GraphQL */ `
  mutation CreateGroupUsers(
    $input: CreateGroupUsersInput!
    $condition: ModelGroupUsersConditionInput
  ) {
    createGroupUsers(input: $input, condition: $condition) {
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
export const updateGroupUsers = /* GraphQL */ `
  mutation UpdateGroupUsers(
    $input: UpdateGroupUsersInput!
    $condition: ModelGroupUsersConditionInput
  ) {
    updateGroupUsers(input: $input, condition: $condition) {
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
export const deleteGroupUsers = /* GraphQL */ `
  mutation DeleteGroupUsers(
    $input: DeleteGroupUsersInput!
    $condition: ModelGroupUsersConditionInput
  ) {
    deleteGroupUsers(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
