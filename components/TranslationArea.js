import React, { useState, useEffect } from 'react'
import { fetchCommentListRequest } from "../utils/store/reducers/comments/actions";
import { useDispatch, connect } from 'react-redux';

const TranslationArea = ({ postList, commentList }) => {
    const [translationIndex, setTranslationIndex] = useState(0)
    const [currentPost, setCurrentPost] = useState([])

    const nextTranslation = () => {
        setTranslationIndex(prev => prev + 1)
        if (translationIndex > postList.length) {
            setCurrentPost([postList[0]])
        }
        else {
            setCurrentPost([postList[translationIndex]])
        }
        dispatch(fetchCommentListRequest(postList[translationIndex]?.id));
    }
    console.log(postList[translationIndex]?.id)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchCommentListRequest(postList[translationIndex]?.id));
    // }, [dispatch])
    useEffect(() => {
        setCurrentPost([postList[translationIndex]])
        dispatch(fetchCommentListRequest(postList[translationIndex]?.id));
    }, translationIndex)

    const prevTranslation = () => {
        setTranslationIndex(prev => prev - 1)
        dispatch(fetchCommentListRequest(postList[translationIndex]?.id));
        if (translationIndex <= 0) {
            setCurrentPost([postList[0]])
        }
        else {
            setCurrentPost([postList[translationIndex]])

        }
    }

    const moveToFirst = () => {
        setTranslationIndex(0)
        setCurrentPost([postList[0]])
        dispatch(fetchCommentListRequest(postList[translationIndex]?.id));
    }

    const moveToLast = () => {
        setTranslationIndex(postList.length - 1)
        setCurrentPost([postList[postList.length - 1]])
        dispatch(fetchCommentListRequest(postList[translationIndex]?.id));
    }


    return (
        <div>
            <div className="second_bar">
                <div className="horizontal_icons">
                    <div className="icon_div"><img src="images/free_icon_1-3.svg" loading="lazy" width={22} height={40} alt /></div>
                    <div className="icon_div"><img src="images/1207560471595452488.svg" loading="lazy" width={21} height={40} alt /></div>
                    <div onClick={moveToFirst} className="icon_div"><img src="images/19942812841540882607.svg" loading="lazy" width={10} height={40} alt /></div>
                    <div onClick={prevTranslation} className="icon_div"><img src="images/17864404941556280995.svg" loading="lazy" width={10} height={40} alt /></div>
                    <div onClick={nextTranslation} className="icon_div"><img src="images/13863747411556280997.svg" loading="lazy" width={10} height={40} alt /></div>
                    <div onClick={moveToLast} className="icon_div"><img src="images/5215865231540882607.svg" loading="lazy" width={10} height={40} alt /></div>
                    <div className="icon_div"><img src="images/21260910731571183076.svg" loading="lazy" width={26} height={40} alt /></div>
                </div>
                <a href="#" className="highlights w-button">Confirm highlights</a>
            </div>
            <div className="man_div">
                <div className="translation_div">
                    <div className="markdown">Markdown1.md</div>
                    <div className="keys_field">
                        <div className="form_container w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form">
                                {
                                    currentPost?.map((post, index) => {

                                        return (
                                            <>
                                                <label htmlFor="name-4" className="key_labels">Key-{post?.id}</label>



                                                <div className="keys_field">
                                                    <input type="text" className="text_fields w-input" maxWidth={256} name="name" value={post?.title} />
                                                    <input type="text" className="text_fields w-input" maxWidth={256} name="name-2" />
                                                </div>

                                                <div className="keys_field">
                                                    <textarea maxLength={5000} name="field" className="w-input text-area" value={post?.body} />
                                                    <textarea maxLength={5000} name="field-2" className="w-input text-area" />
                                                </div>

                                            </>
                                        )


                                    })
                                }

                            </form>
                        </div>
                    </div>
                </div>
                <div className="meta_data_div">
                    {commentList ?
                        <div className="comments_container">
                            <div className="comment_heading">
                                <div className="profile_div" />
                                <div className="comment_tit">{commentList[0]?.name}</div>
                            </div>
                            <div className="comments">{commentList[0]?.body}<br />‍</div>
                        </div>
                        :
                        ""
                    }
                </div>
                <div className="extra_icons_div" />
            </div>
        </div>

    )
}
const mapStateToProps = (state) => ({
    commentList: state?.comments?.commentList,
    fetchingCommentList: state?.comments?.fetchingCommentList,
});

export default connect(mapStateToProps)(TranslationArea);