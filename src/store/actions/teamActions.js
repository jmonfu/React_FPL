export const createTeam = (team) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;

        firestore.collection('teams').add({
            //spread operator for the name, badge, description, leagueId and nationId
            ...team
        }).then(() => {
            dispatch({ type: 'CREATE_TEAM', team });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TEAM_ERROR', err });
        })
    }
}

