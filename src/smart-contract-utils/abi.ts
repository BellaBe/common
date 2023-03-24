import axios from "axios";
import { GetContractABIParams } from "./types/abi";


export const getContractABI = async (
    params: GetContractABIParams
): Promise<string> => {
    const { explorer_base_url, explorer_api_key, contract_address } = params;
    const { data: { data: {result: abi} } } = await axios.get(
        `${explorer_base_url}?module=contract&action=getabi&address=${contract_address}&apikey=${explorer_api_key}`
    )
    return abi;
}