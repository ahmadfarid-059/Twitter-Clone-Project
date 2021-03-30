let tweetsArray= []   //array for local storage
// get HTML Elements
let userName = document.getElementById('user-name')
let tweetContent = document.getElementById('tweet')
let submitButton = document.getElementById('submit')
let tweetsContainer = document.getElementById('tweets-con')
//functions
let selector = (select) => {
    return document.querySelector(select);
  };
  const creatElement = (ele) => {
    return document.createElement(ele);
  };
  const appendElement = (parent, child) => {
    return parent.appendChild(child);
  };

// create tweet function 
function createTweet(){
    event.preventDefault() 
    const tweetContainer = creatElement('div');
    tweetContainer.className = 'tweets';
  
    tweetsContainer.insertBefore(tweetContainer, tweetsContainer.childNodes[0]);
    
    const tweetUser = creatElement('h4');
    tweetUser.textContent = userName.value;
    tweetUser.className = 'tweet_box_user';
    appendElement(tweetContainer, tweetUser);

    const tweetTitle = creatElement('p');
    tweetTitle.textContent = tweetContent.value;
    tweetTitle.className = 'tweet_box_title';
    appendElement(tweetContainer, tweetTitle);
  

    const buttonsContainer = creatElement('div')
    buttonsContainer.className=('like-retweet-button')
    appendElement(tweetContainer, buttonsContainer)
  
    const likeButton = creatElement('button');
    likeButton.textContent = 'Like';
    likeButton.className = 'tweet_like_btn';
    appendElement(buttonsContainer, likeButton);
  
    likeButton.addEventListener('click', () => {
      tweetTitle.style.color = 'blue';
      tweetUser.style.color = 'blue';
      tweetTitle.style.fontStyle = 'italic'
    });
    const reTweetButton = creatElement('button');
    reTweetButton.textContent = 'Re-tweet';
    reTweetButton.className = 're_tweet_btn';
    appendElement(buttonsContainer, reTweetButton);
  
    const tweetObject = {
      tweet: tweetTitle.textContent,
      user: tweetUser.textContent,
    };
    tweetsArray.push(tweetObject);
    /* console this array to see all tweets at your browser console */
    console.log(tweetsArray);
    localStorage.setItem('data', JSON.stringify(tweetsArray))
  
    reTweetButton.addEventListener('click', createTweet);
    userName.value = ''
    tweetContent.value = ''
    
  }
  
  
  submitButton.addEventListener('click', createTweet);
  







 
      
    