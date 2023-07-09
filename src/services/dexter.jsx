import { API } from './apiservices';

export class DexInstance {    
    constructor() {
        this.instance_id = false;
        this.api = new API("https://api.dexgpt.app");
    }

    async instance_status() {
        if (!this.instance_id) return false;

        let resp = await this.api.post("/dex/status/", {
            "instance_id": this.instance_id
        })

        if (!resp?.payload?.status) localStorage.removeItem("instance_id")

        return resp?.payload?.status;
    }

    async get_all_prompts() {
        let resp = await this.api.get("/prompts/")
        return resp.payload;
    }

    async setup(key) {
        let resp = await this.api.post("/create/dex/", {
            "key": key
        })
        this.instance_id = resp.payload.instance_id
    }

    async ask_query(query) {
        let resp = await this.api.post("/query/", {
            instance_id: this.instance_id,
            query: query
        })
        console.log(resp);
        return resp;
    }

    async change_prompt(prompt_id) {
        let resp = await this.api.post("/change/prompt/", {
            instance_id: this.instance_id,
            prompt_id: prompt_id
        })
        return true;
    }

    async change_prompt_text(prompt_text) {
        let resp = await this.api.post("/change/prompt/", {
            instance_id: this.instance_id,
            prompt_text: prompt_text
        })
        return true;
    }
}