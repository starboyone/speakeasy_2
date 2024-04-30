import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="flex flex-col items-center gap-y-8">
          <Image src="/toothless-dancing.gif" alt="Toothless Dancing" height={200} width={200} />
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-500 max-w-[480px] text-center">
          Learn, practice and master your Engligh with SpeakEasy.
          </h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
              <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" signInForceRedirectUrl="/learn" signInFallbackRedirectUrl="/learn">
                <Button size="lg" variant="secondary" className="w-full">
                  Get started!
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" signUpForceRedirectUrl="/learn" signUpFallbackRedirectUrl="/learn">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">
                  Continue learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
        </div>
    </div>

  )
}
 