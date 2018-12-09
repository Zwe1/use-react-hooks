import React from 'react';
import { Link } from 'react-router-dom'

export default class Sider extends React.Component {
    render() {
        return(
            <ul>
               <Link to='/useState'>useState</Link> 
               <Link to='/useEffect'>useEffect</Link> 
               <Link to='/customizeHooks'>customizeHooks</Link> 
            </ul>
        )
    }
}