import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActionCreators from '../actions/user'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(userActionCreators, dispatch);
}