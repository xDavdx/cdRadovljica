import React from 'react';



const Editor = () => {
    return (
        <div>
            <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-firestore.js"></script>
            <div class="banner">
                <input type="file" accept="image/*" id="banner-upload" hidden />
                <label for="banner-upload" class="banner-upload-btn"><img src={require('../images/upload.png')} alt="upload banner" /></label>
            </div>
            <div class="blog">
                <textarea type="text" class="title" placeholder="Blog title..."></textarea>
                <textarea type="text" class="article" placeholder="Start writing here..."></textarea>
            </div>
            <div class="blog-options">
                <button class="btn dark publish-btn">publish</button>
                <input type="file" accept="image/*" id="image-upload" hidden />
                <label for="image-upload" class="btn grey upload-btn">Upload Image</label>
            </div>
        </div>

    )
}


export default Editor
