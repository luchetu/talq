
import Head from 'next/head'
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import TranslationArea from '../components/TranslationArea';
import { fetchPostListRequest } from "../utils/store/reducers/posts/actions";
import { useDispatch } from 'react-redux';

const Home = ({ fetchPostList, postList }) => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch])
  return (
    <div>
      <title>Talq</title>
      <meta name="description" content="Best translaters in town" />
      <link rel="icon" href="/favicon.ico" />
      <div className="body">
        <div className="wrapper">
          <div className="top__bar"><img src="images/logo.svg" loading="lazy" width={65} alt className="logo" />
            <div className="top__text">
              <div className="markdown">Markdown1.md</div>
              <div className="language">English - Spanish</div>
            </div>
            <div className="top__text">
              <div className="markdown">Progress</div>
              <div className="progress">
                <div className="bar">100%</div>
              </div>
            </div>
          </div>
          {
            postList? <TranslationArea postList={postList} /> : null
          }


        </div>
      </div>
    </div>


  )
}
const mapStateToProps = (state) => ({
  postList: state?.posts?.postList,
  fetchingPostList: state?.posts?.fetchingPostList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostList: () => dispatch(fetchPostListRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);