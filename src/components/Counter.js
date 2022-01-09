import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';


function Counter() {
    const [like, setLike] = useState(0)
    const [dislike, setdisLike] = useState(0)
    return (
        <div>


            <IconButton color='success' onClick={(e) => { setLike(like + 1) }}>
                <Badge badgeContent={like} color="primary">
                    <ThumbUpIcon className="icons" />
                </Badge>
            </IconButton>

            <IconButton color='error' onClick={(e) => { setdisLike(dislike + 1) }}>
                <Badge badgeContent={dislike} color="primary">
                    <ThumbDownIcon className="icons" />
                </Badge>
            </IconButton>
        </div>
    )
}


export default Counter;
