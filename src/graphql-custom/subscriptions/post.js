const retString = /* GraphQL */ `{
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
    reactions{
        items{
            post_id
        }
    }
}
`

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost ${retString}
  }
`;

export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost ${retString}
  }
`;