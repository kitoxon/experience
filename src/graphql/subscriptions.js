/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
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
export const onCreateUserDetail = /* GraphQL */ `
  subscription OnCreateUserDetail {
    onCreateUserDetail {
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
export const onUpdateUserDetail = /* GraphQL */ `
  subscription OnUpdateUserDetail {
    onUpdateUserDetail {
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
export const onDeleteUserDetail = /* GraphQL */ `
  subscription OnDeleteUserDetail {
    onDeleteUserDetail {
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
export const onCreateFollowedUsers = /* GraphQL */ `
  subscription OnCreateFollowedUsers {
    onCreateFollowedUsers {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowedUsers = /* GraphQL */ `
  subscription OnUpdateFollowedUsers {
    onUpdateFollowedUsers {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowedUsers = /* GraphQL */ `
  subscription OnDeleteFollowedUsers {
    onDeleteFollowedUsers {
      user_id
      followed_user_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCategory = /* GraphQL */ `
  subscription OnCreateUserCategory {
    onCreateUserCategory {
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
export const onUpdateUserCategory = /* GraphQL */ `
  subscription OnUpdateUserCategory {
    onUpdateUserCategory {
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
export const onDeleteUserCategory = /* GraphQL */ `
  subscription OnDeleteUserCategory {
    onDeleteUserCategory {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      icon
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreatePostReaction = /* GraphQL */ `
  subscription OnCreatePostReaction {
    onCreatePostReaction {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePostReaction = /* GraphQL */ `
  subscription OnUpdatePostReaction {
    onUpdatePostReaction {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePostReaction = /* GraphQL */ `
  subscription OnDeletePostReaction {
    onDeletePostReaction {
      post_id
      user_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReportedPost = /* GraphQL */ `
  subscription OnCreateReportedPost {
    onCreateReportedPost {
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
export const onUpdateReportedPost = /* GraphQL */ `
  subscription OnUpdateReportedPost {
    onUpdateReportedPost {
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
export const onDeleteReportedPost = /* GraphQL */ `
  subscription OnDeleteReportedPost {
    onDeleteReportedPost {
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
export const onCreateReportType = /* GraphQL */ `
  subscription OnCreateReportType {
    onCreateReportType {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReportType = /* GraphQL */ `
  subscription OnUpdateReportType {
    onUpdateReportType {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReportType = /* GraphQL */ `
  subscription OnDeleteReportType {
    onDeleteReportType {
      id
      name
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroupUsers = /* GraphQL */ `
  subscription OnCreateGroupUsers {
    onCreateGroupUsers {
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
export const onUpdateGroupUsers = /* GraphQL */ `
  subscription OnUpdateGroupUsers {
    onUpdateGroupUsers {
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
export const onDeleteGroupUsers = /* GraphQL */ `
  subscription OnDeleteGroupUsers {
    onDeleteGroupUsers {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
