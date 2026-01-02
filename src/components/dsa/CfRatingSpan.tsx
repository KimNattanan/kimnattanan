'use client'

import { useQuery } from "@tanstack/react-query"

export default function CfRatingSpan(){
  const { data, isPending, error } = useQuery({
    queryKey: ['cf-user-info'],
    queryFn: async()=> fetch('https://codeforces.com/api/user.info?handles=kimnattanan&checkHistoricHandles=false')
      .then(res => res.json()),
  });

  if(isPending) return <span>{'... /ᐠ｡ꞈ｡ᐟ\\'}</span>;
  if(error) return <span className="text-red1">{'/ᐠ｡ꞈ｡ᐟ\\ error!'}</span>;
  const maxRating = data.result[0].maxRating;
  const ratingColor = maxRating >= 3000 ? '#aa0000' :
                      maxRating >= 2400 ? '#ff0000' : 
                      maxRating >= 2100 ? '#ff8c00' : 
                      maxRating >= 1900 ? '#aa00aa' : '#0000ff'; 
  return <span style={{color:ratingColor}}>{maxRating}</span>;
}