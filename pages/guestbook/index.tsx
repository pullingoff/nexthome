// import Message from "@components/guestbook/message";
import { useEffect, useState } from 'react';
import { IIssue, IMsg } from '@type';

const GuestBook = () => {
  const [msgs, setMsgs] = useState<IMsg[]>([]);

  // 마운트되면 API 내 깃허브 repo issue fetch
  useEffect(() => {
    fetch('https://api.github.com/repos/pullingoff/nexthome/issues')
      .then(res => res.json())
      .then(data => {
        setMsgs(
          data
            .filter(
              (issue: IIssue) =>
                issue.labels[0] && issue?.labels[0].name === 'guestbook'
            )
            .map((msg: IMsg) => {
              return {
                title: msg.title,
                body: msg.body,
                labels: msg.labels.map((label: string) => label),
              };
            })
        );
      });
  }, []);

  return (
    <>
      {/* {msgs?.map((msg, idx) => (
                <Message key={idx} msg={msg} />
            ))
        } */}
    </>
  );
};

export default GuestBook;
