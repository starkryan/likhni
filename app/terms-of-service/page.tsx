import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Terms of Service</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Likhni, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials (information or software) on Likhni for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. User Content</h2>
              <p className="text-muted-foreground">
                Users are responsible for the content they post and share on Likhni. Content must not violate any applicable laws or infringe on intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Privacy Policy</h2>
              <p className="text-muted-foreground">
                Your use of Likhni is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Modifications</h2>
              <p className="text-muted-foreground">
                Likhni reserves the right to revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at support@likhni.com
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
