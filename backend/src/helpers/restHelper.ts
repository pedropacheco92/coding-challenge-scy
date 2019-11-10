import { ServerResponse, IncomingMessage } from "http";

export async function parseBody(req: IncomingMessage): Promise<any> {
    return new Promise(resolve => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            if (body.startsWith('{') || body.startsWith('[')) {
                body = JSON.parse(body)
            }
            resolve(body)
        });
    })
}

export function getId(url: string, endpoint: string) {
    const id = url.replace(endpoint, '').replace('/', '')
    return id === '' ? undefined : id;
}

export function send(res: ServerResponse, data: any, status?: number) {
    if (status) res.writeHead(status)
    res.write(JSON.stringify(data));
    res.end();
}
