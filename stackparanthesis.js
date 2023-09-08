class Stack
{
  constructor () 
  {
    this.top = null
  }

  push(ele)
  {
      var node=new newNode(ele)
      node.next=this.top
      this.top=node
  }

  pop()
  {
      if(this.top!=null)
      {
      var temp=this.top
      var char=temp.data
      this.top=this.top.next
      temp=null
      return char
      }
  }
  checkParanthesis(str) 
  {
    var flag = 1
    for (var i = 0; i < str.length; i++) 
    {
      if (str[i] == "(") 
      {
        top.push(str[i])
        
      } 
      else if (str[i] == ")") 
      {
        if (top.pop() != "(") 
        {
          console.log("Expression not balanced")
          flag=0
          break
        }
      }
      else if (str[i] == "{") 
      {
        top.push(str[i])
        
      } 
      else if (str[i] == "}") 
      {
        if (top.pop() != "{") 
        {
          console.log("Expression not balanced")
          flag=0
          break
        }
      }
      else if (str[i] == "[") 
      {
        top.push(str[i])
        
      } 
      else if (str[i] == "]") 
      {
        if (top.pop() != "[") 
        {
          console.log("Expression is not balanced")
          flag=0
          break
        }
      }
      
  }
  if(flag==1)
        console.log("Expression is balanced")
  if(this.top!=null)
      console.log("Expression is not balanced")
}

  display()
  {
    
      var temp=this.top
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
  
}
  
class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}
const top = new Stack()
//top.checkParanthesis("{(a+b)*p}[(c-d]")
top.checkParanthesis("{(a+b)p}[(a+b)]")

