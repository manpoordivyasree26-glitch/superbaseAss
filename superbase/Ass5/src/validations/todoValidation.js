export const validateTodo=({title,userId})=>{
    if(!title||!userId){
        return "Title UserId are requried"
    }
    return null;
};