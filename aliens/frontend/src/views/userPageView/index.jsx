import UserCard from "../../modules/User/components/UserCard/index";
import {
    Switch,
    Route,
    useRouteMatch,
  } from "react-router-dom";


const UserPageView = () => {
    let match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={`${match.path}/:userId`}>
                    <UserCard></UserCard>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a user.</h3>
                </Route>
            </Switch>
        </>
    )
}

export default UserPageView;