const globalId = 3

let encList = [
    {
      "id":0,
      "saying":"Don't give up, no matter how hard it gets!",
    },
    {
      "id":1,
      "saying":"Best things in life take time",
    },
    {
      "id":2,
      "saying":"Not all who wander are lost!"
    },
  ]

  module.exports = {
      getEnc: (req,res) =>{
          res.status(200).send(encList)
      },

      deleteEnc: (req,res) =>{
          const endId = req.params.id
          const index = encList.findIndex(enc =>enc.id === encID)

          encList.splice(index, 1)

          res.status(200).send(encList)
      },

      createEnc: (req,res) =>{
        let { saying} = req.body
        const newEnc ={
            id: globalId,
            saying
        }
        encList.push(newEnc)

        globalId ++

        res.status(200).send(encList)
      },

  }
  