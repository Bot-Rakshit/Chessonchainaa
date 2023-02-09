import { CodeFormats } from ".";

const ts: CodeFormats = {
  client:
`const result = await client.invoke({
  uri: "wrap://ens/near.eth:wrapper@1.2.3",
  method: "deployContract",
  args: {
    data: Uint8Array.from([...]),
    contractId: "...",
    signerId: "..."
  }
});`,
  codegen:
`const result = await Near.deployContract({
  data: Uint8Array.from([...]),
  contractId: "...",
  signerId: "..."
});`
};

const py: CodeFormats = {
  client:
`options = InvokerOptions(
  uri=Uri("wrap://ens/near.eth:wrapper@1.2.3"),
  method="deployContract",
  args={
    "data": [...],
    "contractId": "...",
    "signerId": "..."
  }
)

result = await client.invoke(options)`
};

const rust: CodeFormats = {
  client:
`let result = client.invoke(
    &Uri::from("wrap://ens/near.eth:wrapper@1.2.3"),
    "deployContract",
    wrap::args!({
      "data": [...],
      "contractId": "...",
      "signerId": "..."
    })
).await.unwrap();`
};

export default { ts, py, rust }