import {INFURA_ADDRESS, ADDRESS, ABI} from "./config"
import Web3 from "web3";

const infuraAddress = INFURA_ADDRESS

const degensApi = async(req, res) => {

  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const degensContract = new web3infura.eth.Contract(ABI, ADDRESS)
  
  const query = req.query.id;
    
    res.statusCode = 200
    res.json(metadata)
}

export default degensApi