import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Twitter } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-purple-100">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="space-y-4 items-center text-center">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            MB
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Subscribe to My Newsletter</h2>
            <p className="text-muted-foreground">
              Get the latest updates, tips, and exclusive content delivered straight to your inbox.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="flex items-center gap-2 flex-1">
              <Facebook size={18} />
              <span>Facebook</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 flex-1">
              <Twitter size={18} />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 flex-1">
              <Github size={18} />
              <span>Github</span>
            </Button>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-sm text-gray-400">or continue with email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Subscribe Now</Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
          </div>
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </CardFooter>
      </Card>
    </div>
  )
}

