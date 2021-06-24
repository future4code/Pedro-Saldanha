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


export default function PostCard({ posts }) {

    return (
        <>
            {posts.length ? (
                <>{posts.map((post) => {
                    return <PostsCard key={post.id}>
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
                            <IconButton aria-label="dislike" color="primary">
                                <ThumbDownIcon />
                            </IconButton>
                            <IconButton aria-label="comment" color="secondary">
                                <CommentIcon />
                            </IconButton>
                            <IconButton aria-label="share" color="secondary">
                                <ShareIcon />
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