

const employees = require("./model/employeesModel")
const employeesModel = require("./model/employeesModel")

const handleGetRequest = async(request, response)=>{
    
    const employees = await employeesModel.find()
    return response.status(200).json({message: "List of Employees", Employees})
}

const handleEditRequest = async(request, response)=>{
  const { id } = req.params

  const { name, position, department, email, phone  } = req.body

  const editedEmployees = await Blogs.findByIdAndUpdate(
      id,
      {name, position, department, email, phone},
      {new: true}
  )
  return res.status(200).json({
      message: "Successful",
      employees: editedEmployees
  })
}


const handleDeleteRequest = async(request, response)=>{
    
  const { id } = req.params

    const deletedEmployee = await Employees.findByIdAndDelete(id)

    return res.status(200).json({message: "Deleted Successful"})
   }


const handlePostRequest = async(request, response) =>{

    const {name, position, department, email, phone} = request.body
    const newEmployees = new employeesModel({ name, position, department, email, phone})
    await newEmployees.save()

    return response.status(200).json({message: "successful",
    employees: newEmployees
})




}
 


module.exports = { 
    handleGetRequest,
    handlePostRequest,
    handleEditRequest,
    handleDeleteRequest,
   


}