import { notFound } from "next/navigation";
import { Suspense } from "react";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore"
type Props = {
  searchParams: Promise<{ p?: string }>
};
export default async function PostPage({ searchParams } : Props) {
  const { p: postId } = await searchParams;
  if (!postId) {
    return notFound();
  }
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return (
      <div className="p-2">
        <Suspense fallback={<p>Loading...</p>}>
          <img src={docSnap.data().image} className="w-3/4 m-auto rounded-xl"/>
          <p className="p-2 w-3/4 m-auto">{docSnap.data().content}</p>
        </Suspense>
      </div>
    );
  } else {
    notFound();
  }
}
