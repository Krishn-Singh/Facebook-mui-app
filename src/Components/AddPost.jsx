import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"

})

const AddPost = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)}
                title="Delete" sx={{ position: "fixed", bottom: 20 }}>
                <Fab color="primary" aria-label="add">
                    < Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} bgcolor="white" borderRadius={5}>
                    <Typography variant='h5' textAlign="center"> Create Post</Typography>
                    <UserBox>
                        <Avatar src=""
                            sx={{ height: 30, width: 30 }} />
                        <Typography>Krish</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="filled-multiline-flexible"
                        placeholder="what's on your mind ?"
                        multiline
                        maxRows={4}
                        variant="filled"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3} ></Stack>
                    <EmojiEmotions color='primary' />
                    <Image color='secondary' />
                    <VideoCameraBack color='success' />
                    <PersonAdd color='error' />
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100%"}}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>

        </>
    )
}

export default AddPost