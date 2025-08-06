import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FileText, 
  Download, 
  Trash2, 
  Eye,
  Plus,
  File,
  Image,
  FileSpreadsheet
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Document {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected';
}

const Documents: React.FC = () => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      name: 'GST Registration Certificate.pdf',
      type: 'PDF',
      size: '2.3 MB',
      uploadDate: '2024-03-15',
      category: 'Tax Documents',
      status: 'approved'
    },
    {
      id: 2,
      name: 'Trade License Application.docx',
      type: 'DOCX',
      size: '1.8 MB',
      uploadDate: '2024-03-14',
      category: 'Licenses',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Fire Safety Certificate.pdf',
      type: 'PDF',
      size: '1.2 MB',
      uploadDate: '2024-03-13',
      category: 'Safety Documents',
      status: 'approved'
    }
  ]);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            
            // Add new document to list
            const newDoc: Document = {
              id: documents.length + 1,
              name: files[0].name,
              type: files[0].name.split('.').pop()?.toUpperCase() || 'FILE',
              size: `${(files[0].size / (1024 * 1024)).toFixed(1)} MB`,
              uploadDate: new Date().toISOString().split('T')[0],
              category: 'General',
              status: 'pending'
            };
            
            setDocuments(prev => [...prev, newDoc]);
            
            toast({
              title: "Document uploaded successfully",
              description: `${files[0].name} has been uploaded and is pending review.`,
            });
            
            return 0;
          }
          return prev + 10;
        });
      }, 200);
    }
  }, [documents.length, toast]);

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return <FileText className="h-8 w-8 text-red-500" />;
      case 'docx':
      case 'doc': return <File className="h-8 w-8 text-blue-500" />;
      case 'xlsx':
      case 'xls': return <FileSpreadsheet className="h-8 w-8 text-green-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png': return <Image className="h-8 w-8 text-purple-500" />;
      default: return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>;
      case 'rejected': return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const handleDelete = (id: number) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    toast({
      title: "Document deleted",
      description: "The document has been removed from your files.",
      variant: "destructive"
    });
  };

  const handleDownload = (document: Document) => {
    toast({
      title: "Download started",
      description: `Downloading ${document.name}...`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Document Management</h1>
            <p className="text-muted-foreground">Upload and manage your compliance documents</p>
          </div>
        </div>

        {/* Upload Section */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Documents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
              <p className="text-muted-foreground mb-4">
                Supports PDF, DOC, DOCX, XLS, XLSX, and image files up to 10MB
              </p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
              />
              <Button 
                onClick={() => document.getElementById('file-upload')?.click()}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isUploading}
              >
                <Plus className="mr-2 h-4 w-4" />
                Choose Files
              </Button>
            </div>
            
            {isUploading && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle>Uploaded Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((document) => (
                <div key={document.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    {getFileIcon(document.type)}
                    <div>
                      <h4 className="font-medium">{document.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{document.size}</span>
                        <span>•</span>
                        <span>{document.category}</span>
                        <span>•</span>
                        <span>Uploaded on {document.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {getStatusBadge(document.status)}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(document)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(document)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(document.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Categories */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {documents.filter(d => d.category === 'Tax Documents').length}
                  </p>
                  <p className="text-muted-foreground text-sm">Tax Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <File className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {documents.filter(d => d.category === 'Licenses').length}
                  </p>
                  <p className="text-muted-foreground text-sm">Licenses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {documents.filter(d => d.category === 'Safety Documents').length}
                  </p>
                  <p className="text-muted-foreground text-sm">Safety Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documents;
