import { gql } from "@apollo/client"

const UPDATEUSER= gql`
    mutation updateUser($uid: String, $photoURL: String, $account_name: String, $displayName: String, $class: Int, $languages: Int, $soundtrack: Boolean, $theme_game: Int) {
        updateUser(uid: $uid, photoURL: $photoURL, account_name: $account_name, displayName: $displayName, class: $class, languages: $languages, soundtrack: $soundtrack, theme_game: $theme_game) {
            uid,
            photoURL,
            account_name, 
            displayName,
            class,
            languages,
            soundtrack,
            theme_game,
            is_update
        }
    }
`

export default UPDATEUSER    