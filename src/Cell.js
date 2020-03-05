import React, {Component} from 'react';
import './css/Cell.css';

export default class Cell extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.click(this.props.pos);
    } 
    render() {
        const styles = this.props.status? 'Cell activated': 'Cell';
        return (
            <div className={styles} onClick={this.handleClick}>
            </div>
        )
    }
}