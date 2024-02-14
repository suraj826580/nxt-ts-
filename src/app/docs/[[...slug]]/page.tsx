import React from "react";

interface slug {
  slug: String[];
}
function CatchAllSegment({ params }: { params: slug }) {
  const { slug } = params;
  if (slug?.length == 1) {
    return <h1>{slug[0]}</h1>;
  } else if (slug?.length == 2) {
    return <h1>{slug[1]}</h1>;
  }
  return <h1>Catch All Segment</h1>;
}

export default CatchAllSegment;
