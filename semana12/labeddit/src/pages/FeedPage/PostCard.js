import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { PostsCard } from './styled';
import { goToPostDetail } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';


export default function PostCard({ posts }) {
    const history = useHistory()
  
    const goToDetail = (id) => {
        goToPostDetail(history, id)
    }

    return (
        <>
            {posts.length ? (
                <>{posts.map((post) => {
                    return <PostsCard key={post.id} onClick={() => goToDetail(post.id)}>
                        <CardHeader
                            title={post.title}
                            subheader={post.username}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.body}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="like" color="primary">
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.voteSum}
                            </Typography>
                            <IconButton aria-label="dislike" color="primary">
                                <ThumbDownIcon />
                            </IconButton>
                            <IconButton aria-label="share" color="secondary">
                                <ShareIcon />
                            </IconButton>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {post.commentCount}
                            </Typography>
                            <IconButton aria-label="comment" color="secondary">
                                <CommentIcon />
                            </IconButton>
                           

                        </CardActions>

                    </PostsCard>
                })}</>
            ) : (
                <PostsCard>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Carregando...
                    </Typography>
                </PostsCard>
            )}

        </>
    );
}