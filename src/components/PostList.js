import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList(){
        return this.props.posts.map( post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned middle icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>
                                {post.title}
                            </h2>
                            <div>
                                <UserHeader userId={post.userId} />
                            </div>
                            <p>
                                {post.content}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
       return  <div className='ui relaxed divided list'> { this.renderList() } </div>;
    };
};

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
    )(PostList);